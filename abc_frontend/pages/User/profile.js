import MyLayout from "./component/layout"
// import Header from "./component/header"
export default function Profile() {
    return (
      <>
      

      
      {/* <MyLayout title="profile"/> */}
      <center><h2>My profile</h2>
      <li>
          <a href="./updateuser" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Update profile</a>
      </li>
      <li>
          <a href="./status" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">your status</a>
      </li>


      </center>
      

      <br></br>  
      
      </>
    )
  }