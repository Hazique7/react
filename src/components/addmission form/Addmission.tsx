import {Form,Button,Input,Select,UploadFile, Upload} from 'antd'
import './admissionfForm.css';
import {useState} from 'react'
function Addmission(){
  
  return(
<ShowForm />
  )
}

function ShowForm(){
  const [userDATA,setUserDATA]  = useState({
    FullName : "",
    FatherName : "",
    CNIC: "",
    EMAIL:"",
    ContactNo :""
  })
  // document.getElementById('div-form')!.style.display = "block"
  return(
    <div className='div-form' id='FORM'>
 
  <header className='app-form' >
    <h1>Addmission Form</h1>
    <Form layout='horizontal'method='post' >
      <Form.Item name= "full name" label = "Full Name" style={{color: "#2f4f4f"}} required>
        <Input name='FullName' value={userDATA.FullName}  placeholder=' ENTER FULL NAME' style={{textAlign:"center",width: "230px"}} />
      </Form.Item>
      <Form.Item name= "father name" label = "Father Name"style={{color: "#2f4f4f"}} required >
        <Input placeholder='ENTER FATHER NAME'style={{textAlign:"center",width: "230px",marginLeft:"-20px"}} />
      </Form.Item>
      <Form.Item name= "cnic" label = "CNIC"style={{color: "#2f4f4f"}} required>
        <Input placeholder='XXXXX-XXXXXXX-X' style={{textAlign:"center",width: "230px",marginRight:"-29px"}}/>
      </Form.Item>
      <Form.Item name= "EMAIL" label = "EMAIL"style={{color: "#2f4f4f"}} required>
        <Input placeholder='abcd123@gamil.com' style={{textAlign:"center",width: "230px",marginLeft:"20px"}}/>
      </Form.Item>
      <Form.Item name= "contact" label = "CONTACT NO :"style={{color: "#2f4f4f"}}required>
        <Input placeholder='+92345444098' style={{textAlign:"center",width: "230px",marginLeft:"-30px"}} />
      </Form.Item>
    </Form>
    <Form.Item label = "GENDER"style={{color: "#2f4f4f"}} required>
      <Select placeholder = "Select Your Gender">
        <Select.Option Value = "male">
          MALE
        </Select.Option>
        <Select.Option Value = "female">
          FEMALE
        </Select.Option>
        <Select.Option Value = "other">
          Other
        </Select.Option>
      </Select>
    </Form.Item>
     <Form.Item label="COURSES"style={{color: "#2f4f4f"}} required>
<Select placeholder="SELECT COURSE">
  <Select.Option>
  WEB AND MOBILE APP DEVELOPMENT
  </Select.Option>
  <Select.Option>
  ARTIFICIAL INTELLIGENCE AND CHATBOT DEVELOPMENT
  </Select.Option>
  <Select.Option>
  MARKETING
  </Select.Option>
  <Select.Option>
  MOBILE REPAIREING
  </Select.Option>
  <Select.Option>
  NETWORKING
    </Select.Option>
</Select>
     </Form.Item>
     <Form.Item label="EDUCATION"style={{color: "#2f4f4f"}} required>
<Select placeholder="SELECT">
  <Select.Option>
    Matricuation
  </Select.Option>
  <Select.Option>
    Intermediate
  </Select.Option>
  <Select.Option>
    Bachelors
  </Select.Option>
</Select>
     </Form.Item>
     <Form.Item>
       <Upload>
        <Button >UPLOAD IMAGE</Button> 
       </Upload>
     </Form.Item>
     <Form.Item>
       <Button type='primary'>SUMBIT</Button>
     </Form.Item>
  </header>
</div>
  )
}
export default Addmission;