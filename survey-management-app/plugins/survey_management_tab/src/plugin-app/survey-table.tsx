import React from 'react';
import { Survey } from './plugin-app';
import { AdvancedTable } from '@qualtrics/ui-react/next';
import { HyperlinkIcon } from '@qualtrics/ui-react/icons';

type SurveyTableProps = {
    surveys: Survey[]
    baseUrl: string
};

export function SurveyTable(props: SurveyTableProps) {
  const columnConfigs = [
    {
      id: 'name',
      headerLabel: 'Name',
      width: 250,
    },
    {
      id: 'id',
      headerLabel: 'Survey ID',
      width: 250,
    },
    {
      id: 'isActive',
      headerLabel: 'Status',
      renderCellContent: (data: {value: boolean}) => {
        return data.value ? 'Active' : 'Inactive';
      },
      width: 250,
    },
    {
      id: 'lastModified',
      headerLabel: 'Last Modified',
      renderCellContent: (data: {value: Date}) => {
        return data.value.toLocaleString();
      },
      width: 250,
    },
    {
      id: 'link',
      headerLabel: 'Edit Survey',
      renderCellContent: (data: {value: string}) => {
        return (
          <a href={data.value} target='_blank'>
            <HyperlinkIcon/>
          </a>
        );
      },
      width: 250,
    },
  ];

  const rows = props.surveys.map((survey) => {
    return {
      id: survey.id,
      data: {
        name: survey.name,
        id: survey.id,
        isActive: survey.isActive,
        lastModified: survey.lastModified,
        link: `${props.baseUrl}/survey-builder/${survey.id}/edit`,
      }
    };
  });

  return (
    <div className='survey-table'>
      <AdvancedTable
        columnConfigs={columnConfigs}
        rows={rows}
        disableUserResizableColumns={true}
        disableUserReorderableColumns={true}
        disableUserPinnableColumns={true}
      />
    </div>
  );
}
