import React from 'react';
const Create = () => {
  return ( 
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <label htmlFor="">Blog Title</label>
        <input 
          type="text"
          required
        />
        <label htmlFor="">Blog body</label>
        <textarea 
          required
        ></textarea> 
        <label htmlFor="">Blog author:</label> 
        <select name="" id="">
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>  
        <button>add blog</button>  
      </form>
    </div>
   );
}
 
export default Create;