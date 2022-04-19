import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';
import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Dessert (100g serving)'
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Calories'
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Fat (g)'
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Carbs (g)'
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Protein (g)'
  }
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// React-Beautiful-dnd code
const grid = 4;
const getListStyle = isDraggingOver => ({
  display: 'flex',
  padding: grid,
  overflow: 'none'
});

// React-Beautiful-dnd code
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  paddingBottom: grid * 2,
  margin: `0 ${grid}px 0 0`,
  display: 'inline-block',

  // change background colour if dragging
  // background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

export default function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const [columnData, setColumnData] = useState(headCells);

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  const onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!result.destination) return;

    const fileredColumn = reorder(columnData, source.index, destination.index);

    setColumnData(fileredColumn);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <TableHead>
        <TableRow>
          {}
          <TableCell padding='checkbox'></TableCell>
          {columnData.map(headCell => {
            console.log(headCell);
            return (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <Box component='span' sx={visuallyHidden}>
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    </DragDropContext>
  );
}
