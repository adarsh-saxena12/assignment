
import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 400 },
  
];

const SuccessComponent1: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((posts: Post[]) => {
        
        const limitedPosts = posts.slice(0, 10);
        setData(limitedPosts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ height: 400, width: '60%', border: '#3FA2F6', marginBottom: 10}}>
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        checkboxSelection
        rowHeight={60}
        
        style={{
            border: '1px solid #3FA2F6',
            borderRadius: '10px',
            padding: '10px',
          }}
      />
    </div>
  );
};

export default SuccessComponent1;
