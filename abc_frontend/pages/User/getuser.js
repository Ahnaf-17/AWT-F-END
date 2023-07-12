import Link from "next/link"
import MyLayout from "./component/layout"
import axios from "axios";


export default function GetUsers({ data }) {
    // console.log(data);
  return (
      <>
     
      <h1>All Users</h1>
      {/* <MyLayout title="getuser"/> */}
      <ul>
        {data.map(item => (
          <li key={item.id}>
      
        <Link href={"./test/"+item.id}>{item.name}</Link>
            </li>
        ))}
      </ul>
      <footer/>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/user/index');
      const data = await response.data;
    
  return { props: { data } }
  }