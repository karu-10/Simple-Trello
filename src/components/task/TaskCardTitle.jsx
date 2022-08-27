import React,{useState}from 'react'

const TaskCardTitle = () => {
  // 状態変数
  // フック
  const [isClick,setIsClick]=useState(false);
  const [inputCardTitle,setInputCardTitle]=useState("Today");

  const handleclick=()=>{
    setIsClick(true);
    console.log(isClick);
  };

  const handleChange=(e)=>{
    setInputCardTitle(e.target.value);
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsClick(false);
  };
  
  const handleBlur=()=>{
    setIsClick(false);
  };

  return (
    <div onClick={handleclick} className="taskCard-TitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
         <input 
          className='taskCard-TitleInput'
          autoFocus
          type="text" 
          onChange={handleChange} 
          onBlur={handleBlur} 
          value={inputCardTitle}
          maxLength="10">
          </input>
        </form>
      ):(
         <h3>{inputCardTitle}</h3>
      )}
    </div>
  )
}

export default TaskCardTitle
