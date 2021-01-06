import './index.scss'
import { useHistory, useLocation, useParams } from 'react-router-dom'

const HomeIndex = (props) => {
  console.log('home index props', props)
  let history = useHistory();
  let location = useLocation();
  let params = useParams(); 

  function handleClick() {
    history.push("/user");
  }

  function getLocation() {
    console.log('getLocation', location)
  }
  getLocation()

  // function getParams() {
  //   console.log('params', params)
  // }
  // getParams()

  console.log('process.env', process.env)
  
  return (
    <div>
      home index

      <button onClick={handleClick}>跳转个人中心</button>
    </div>
  )
}

export default HomeIndex