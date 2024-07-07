
import React, { useState } from 'react';
import { IconButton, List, ListItem, ListItemText, Collapse, Checkbox, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import data from '../constants/data';


const DepartmentList: React.FC = () => {

  const [openDepartments, setOpenDepartments] = useState<{ [key: string]: boolean }>({});
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: boolean }>({});

  const toggleDepartment = (department: string) => {

    setOpenDepartments(prev => ({
      ...prev,
      [department]: !prev[department],
    }));
  };

  const toggleSelection = (key: string, isDepartment: boolean, subDeps?: string[]) => {
    
    setSelectedItems(prev => {
      const newState = { ...prev };
      newState[key] = !prev[key];

      if (isDepartment && subDeps) {
        subDeps.forEach(sub => {
          newState[sub] = newState[key];
        });
      }

      if (!isDepartment) {
        const parentDept = data.find(({ sub_departments }) => sub_departments.includes(key))?.department;
        if (parentDept) {
          const allSubSelected = data
            .find(({ department }) => department === parentDept)
            ?.sub_departments.every(sub => newState[sub]) || false;
          newState[parentDept] = allSubSelected;
        }
      }

      return newState;
    });
  };

  return (
    <List>
      {data.map(({ department, sub_departments }) => (
        <div key={department}>
          <ListItem>
            
            {/* Icon for expanding/collapsing the sub-departments */}

            <IconButton
              edge="start"
              onClick={() => toggleDepartment(department)}
              aria-label={`expand ${department}`}
            >
              {openDepartments[department] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            
            {/* Checkbox for department */}

            <Checkbox
              checked={selectedItems[department] || false}
              onClick={(e) => {
                e.stopPropagation();
                toggleSelection(department, true, sub_departments);
              }}
            />
            <ListItemText primary={department} />

            <Typography variant="body2" color="textSecondary" style={{ marginLeft: 'auto' }}>
              ({sub_departments.length})
            </Typography>

          </ListItem>

          <Collapse in={openDepartments[department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {sub_departments.map((sub, index) => (

                <ListItem key={index} sx={{ pl: 8 }}>

                  {/* Checkbox for sub-department */}
                  <Checkbox
                    checked={selectedItems[sub] || false}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSelection(sub, false);
                    }}
                  />
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;

