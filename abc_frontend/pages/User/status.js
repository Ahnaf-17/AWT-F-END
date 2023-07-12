import MyLayout from "./component/layout"
// import Header from "./component/header"
export default function Status() {
    return (
      <>
      
      {/* <MyLayout title="status"/> */}
<h1>My status</h1>
      <li>
          <a href="./updatestatus" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Update status</a>
      </li>
      <li>
          <a href="./deletestatus" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Delete status</a>
      </li>

      

      <br></br>  
      
      </>
    )
  }