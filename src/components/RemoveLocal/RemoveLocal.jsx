import React from 'react';

function YourComponent() {
  const handleDelete = (index) => {
    const dataArray = JSON.parse(localStorage.getItem('yourDataArray')) || [];

    dataArray.splice(index, 1);
    localStorage.setItem('yourDataArray', JSON.stringify(dataArray));

  };

  return (
    <div>
      {dataArray.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <img src={item.imageUrl} alt={item.name} />
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default YourComponent;