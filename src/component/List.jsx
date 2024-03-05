const List=({item ,onDeleteItem,handleDoneItem})=>{
    const{product,quantity,packed,id}=item;
    return(
<li className='listWrapper'><span>{quantity}</span>
<p style={packed?{textDecoration: 'line-through'}:{}}>{product}</p>
<button onClick={()=>handleDoneItem(id)} className="doneBtn">YES</button>
<button onClick={()=>onDeleteItem(id)}className="deleteBtn">NO</button>
</li>
    )
}
export default List;