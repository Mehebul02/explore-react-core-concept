export default function Information({info}){
    console.log(info)
  return(
    <div>
      <h3>Id:{info.id}</h3>
      <h3>Name:{info.name}</h3>
      <h3>Department:{info.department}</h3>
      <h3>Semester: {info.semester}</h3>
      <h3>Roll: {info.roll}</h3>
      <h3>Shift:{info.shift}</h3>
    </div>
      
  )
}