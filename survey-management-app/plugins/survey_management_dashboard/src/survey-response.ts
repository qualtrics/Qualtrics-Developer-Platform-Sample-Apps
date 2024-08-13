import { CustomBlockClient } from '@qualtrics/custom-block-client';

type CreateExportResponse = {
    meta: any,
    result: {
        percentComplete: number,
        progressId: string,
        status: string
    }
}

type CheckProgressResponse = {
    meta?: any,
    result: {
        percentComplete: number,
        fileId?: string,
        status?: string
    }
}

export type SurveyResponses = {
  responses?: any,
  error?: string
}

export async function GetSurveyResponses(client: CustomBlockClient, surveyId: string): Promise<SurveyResponses> {
  let res: SurveyResponses = {
    responses: undefined,
    error: undefined,
  };
  let progressId = '';

  // begin the response export process
  await client.qualtricsApiFetch(`/surveys/${surveyId}/export-responses`, {
    method: 'POST',
    body: {
      format: 'json',
      compress: false,
    }
  }).then((response) => {
    let responseData = response.responseData as CreateExportResponse;
    progressId = responseData.result.progressId;
  }).catch((error) => {
    res.error = `error creating export: ${error}`;
    return res;
  });

  let progressResponse: CheckProgressResponse = {
    result: {
      percentComplete: 0,
    }
  };

  // poll export progress
  let maxPolls = 10;
  let numPolls = 0;
  while(progressResponse.result.percentComplete < 100 && numPolls < maxPolls) {
    numPolls += 1;
    await client.qualtricsApiFetch(`/surveys/${surveyId}/export-responses/${progressId}`, {
      method: 'GET',
    }).then((response) => {
      progressResponse = response.responseData as CheckProgressResponse;
    }).catch((error) => {
      res.error = `error checking response export progress: ${error}`;
      return res;
    });

    // sleep for 1s
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // download the file and return the responses
  await client.qualtricsApiFetch(`/surveys/${surveyId}/export-responses/${progressResponse.result.fileId}/file`, {
    method: 'GET',
  }).then((response) => {
    res.responses = response.responseData;
  }).catch((error) => {
    res.error = `error downloading response export file: ${error}`;
    return res;
  });

  return res;
}
