import {Card} from 'antd'
import './courses.css'
function CoursesCard(){
    return(
        <div id='COURSES' className='COURSE'>
       
         <div><h1>COURSES WE OFFER</h1></div>


    


  <Card style={{ width: 240 ,justifyContent:"center",alignItems:"center",textAlign:"center",marginLeft:30}} bodyStyle={{ padding: 0 ,boxShadow: '10 ',justifyContent:"center",alignItems:"center",textAlign:"center" }} className="CARD">
    <div className="custom-image">
      <img alt="example" width="100%" src="https://th.bing.com/th/id/R.473f4e873480456ca2fe9805f367b61b?rik=pSdZU2D4a7%2b5kg&pid=ImgRaw&r=0" />
      <h3 style={{display:"inline"}}>NETWORKING</h3>
    </div>

  </Card>
  <Card style={{ width: 240 ,justifyContent:"center",alignItems:"center",textAlign:"center" , marginLeft:370,marginTop:-160}} bodyStyle={{ padding: 0 ,boxShadow: '10 ',justifyContent:"center",alignItems:"center",textAlign:"center" }} className="CARD">
    <div className="custom-image">
      <img alt="example" width="100%" src="https://th.bing.com/th/id/R.ea5620f5c940cbe29399a322721aa678?rik=8V%2frmH55tK%2fMsA&pid=ImgRaw&r=0" />
      <h3 style={{display:"inline"}}>WEB-DEVELOPMENT</h3>
    </div></Card>
  <Card style={{ width: 240 ,justifyContent:"center",alignItems:"center",textAlign:"center" , marginLeft:770,marginTop:-140}} bodyStyle={{ padding: 0 ,boxShadow: '10 ',justifyContent:"center",alignItems:"center",textAlign:"center" }} className="CARD">
    <div className="custom-image">
      <img alt="example" width="100%" src="https://blimx.com/wp-content/uploads/2019/10/IBM-Marketing-Cloud_iStock.jpg" />
      <h3 style={{display:"inline"}}>MARKETING</h3>
    </div></Card>

        </div>
    )
}
export default CoursesCard
