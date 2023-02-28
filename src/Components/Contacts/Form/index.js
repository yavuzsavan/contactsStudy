import {useState} from 'react'

function Form({addContact, contacts}) {
  
  const initialFormValues = { fullname: '', phoneNumber: ''}

  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }
  
  const onSubmit = (e) => {
    e.preventDefault();

    if ( form.fullname === '' || form.phoneNumber === ''){
      return false;
    }

    addContact([...contacts, form]);

    //cleaning inputs after submit
    setForm(initialFormValues);
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
      <input 
       name="fullname"
       type="text"
       placeholder='Full Name'
       value={form.fullname}
       onChange={onChangeInput}/>
      </div>
      <div>
      <input 
       name="phoneNumber"
       type="text"
       placeholder='Phone Number'
       value={form.phoneNumber}
       onChange={onChangeInput}/>

      <div className='btn'>
        <button>Add</button>
      </div>
      </div>
    </form>
  )
}

export default Form
