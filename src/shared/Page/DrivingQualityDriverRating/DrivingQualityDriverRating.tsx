import React, {useState, useEffect, useCallback} from 'react';
import './DrivingQualityDriverRating.css';

import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'

const gridStyle = { minHeight: 550, marginTop: 10 };

const columns = [
    { name: 'id', type: 'number', maxWidth: 40, header: 'ID', defaultVisible: false },
    { name: 'firstName', defaultFlex: 2, header: 'First Name' },
    { name: 'lastName', defaultFlex: 2, header: 'Last Name' },
    { name: 'email', defaultFlex: 3, header: 'Email' }
];

const loadData = ({ skip, limit, sortInfo }: any) => {
    const url =
        'https://demos.reactdatagrid.io/api/v1/contacts' +
        '?skip=' +
        skip +
        '&limit=' +
        limit +
        '&sortInfo=' +
        JSON.stringify(sortInfo);

    return fetch(url).then(response => {
        const totalCount = response.headers.get('X-Total-Count');
        return response.json().then(data => {
            // @ts-ignore
            return Promise.resolve({ data, count: parseInt(totalCount) });
        })
    })
}


export function DrivingQualityDriverRating() {
    const dataSource = useCallback(loadData, []);

    return (
      <div className="DrivingQualityDriverRating__container">
          <h1>DrivingQualityDriverRating</h1>
          <ReactDataGrid
              idProperty="id"
              style={gridStyle}
              columns={columns}
              pagination
              dataSource={dataSource}
              defaultLimit={10}
          />
      </div>
    );
}
