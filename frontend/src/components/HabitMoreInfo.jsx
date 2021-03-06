import React from 'react';
import Chart from 'react-google-charts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DeleteBtn = styled.button`
  background: #cfccc2;
  &:hover {
    background: #ff711f;
  }
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #8f8d64;
  border-radius: 3px;
  text-align: center;
`;

const MyHabitsDiv = styled.div`
  background: rgba(255, 255, 220, 0.8);
  &:hover {
    background: #e3bf20;
  }
  text-align: center;
  color: #121200;
  width: 50px;
  padding: 0.25em 1em;
  border: 2px solid #8f8d64;
  border-radius: 3px;
`;

const HabitsDiv = styled.div`
  background: rgba(255, 255, 220, 0.8);
  width: 100px;
  padding: 10px;
  margin: auto;
  text-align: center;
`;

const TotalDaysDiv = styled.div`
  background: rgba(255, 234, 31, 0.8);
  width: 170px;
  padding: 10px;
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
`;

const H1 = styled.h1`
  color: rgb(255, 234, 31);
  font-size: 2em;
  text-align: center;
`;

const HabitMoreInfo = ({ habit, handleRemove }) => {
  if (!habit) {
    return null;
  }

  const totalCompletedDays = habit.completions.length;

  const completionDays = habit.completions.map((dateObj) => {
    return [new Date(dateObj.thisYear, dateObj.thisMonth, dateObj.thisDay), 1];
  });

  let data = [
    [
      { type: 'date', id: 'Date' },
      { type: 'number', id: 'Completions' },
    ],
  ];

  const options = {
    title: habit.name,
    noDataPattern: {
      backgroundColor: '#000000',
      color: '#000000',
    },
    colorAxis: {
      minValue: 0,
      colors: ['#00e5ff', '#73ff00'],
    },
    calendar: {
      cellSize: 25,
      cellColor: {
        stroke: '#e3e3e3',
        strokeOpacity: 0.5,
        strokeWidth: 1,
      },
      focusedCellColor: {
        stroke: '#d3362d', // white
        strokeOpacity: 1,
        strokeWidth: 1,
      },
      monthLabel: {
        fontName: 'Arial',
        fontSize: 12,
        color: '#fad850', // gold
        bold: true,
        italic: true,
      },
      monthOutlineColor: {
        stroke: '#fad850', // gold
        strokeOpacity: 0.8,
        strokeWidth: 3,
      },
      unusedMonthOutlineColor: {
        stroke: '#bc5679', // reddish
        strokeOpacity: 0.8,
        strokeWidth: 2,
      },
      underMonthSpace: 16,
      underYearSpace: 10,
      yearLabel: {
        fontName: 'Arial',
        fontSize: 32,
        color: '#695508', // mustard
        bold: true,
      },
    },
  };

  data = data.concat(completionDays);

  // Desktop view:
  if (window.screen.width > 767) {
    return (
      <div>
        <MyHabitsDiv data-cy="back-btn">
          <Link to="/">Quay lại</Link>
        </MyHabitsDiv>
        <Chart
          width={'100%'}
          height={350}
          chartType="Calendar"
          loader={<div>Tải thống kê</div>}
          data={data}
          options={options}
          rootProps={{ 'data-testid': '1' }}
        />
        <TotalDaysDiv>Lần hoàn thành: {totalCompletedDays}</TotalDaysDiv>
        <div>
          <DeleteBtn data-cy="delete-btn" onClick={() => handleRemove(habit)}>
            Xóa
          </DeleteBtn>
        </div>
      </div>
    );
  } else {
    //Mobile view:
    return (
      <div>
        <MyHabitsDiv data-cy="back-btn">
          <Link to="/">Trở lại</Link>
        </MyHabitsDiv>
        <H1>{habit.name}</H1>
        <TotalDaysDiv>TLần hoàn thành: {totalCompletedDays}</TotalDaysDiv>
        <HabitsDiv>
          Ngày hoàn thành:
          {habit.completions.map((dateObj) => (
            <p
              key={`${dateObj.thisDay} ${dateObj.thisMonth} ${dateObj.thisYear}`}
            >{`${dateObj.thisDay} ${dateObj.thisMonth} ${dateObj.thisYear}`}</p>
          ))}
        </HabitsDiv>
        <div>
          <DeleteBtn data-cy="delete-btn" onClick={() => handleRemove(habit)}>
            Xóa
          </DeleteBtn>
        </div>
      </div>
    );
  }
};

export default HabitMoreInfo;
