//rfce yazarak başlangıçtaki yapıyı otomatik
//olarak oluşturabilirsiniz.
import React, {useState} from 'react' //USeState: Kullanıcıdan data almanın en modern şeklidir. BUrada çağırıyoruz.
import {useNavigate} from 'react-router-dom' //Bu da bir hooks'dur.


function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('') //Email: Get (Değişkendir), setEmail:Set(Fonsiyondur.Değeri değiştirmek için kullanılacak),
                                         //email'e ilk değer '' atadık.

  const [password, setPassword] = useState('')

  const sendLogin = (evt: React.FormEvent) => { //Evt: formdan gelen parametre
    evt.preventDefault() //Sayfanın yenilenmesinin önüne geçer
    if(email==="ali@mail.com" && password==="12345"){
      navigate('/dashboard') //Href yerine bunu yapıyoruz. Singpage olması için bu şart!!
                             //Href sayfayı yeniler bu sadece root altını yeniler. Performans üst düzey
    }
  }


  return (
    //Buradan sadece tek bir yapıda sarmalanmış bir yapı göndermelisin.
    //O yüzden sarmaladık.
    <> 
      {/* TypeScript/React'te class yok ClassName var. */}
      {/* Row açtığın anda grid(12'lik yapı) oluşturmuş oluyorsun. */}
      <div className='row'>
        {/* Col-12 ve col-sm-12: Küçük Ekranlarda(Telefon) 12 birim yani tek satır gözükecek */}
        {/* col-md-6: Tablet 6 birim gözükecek */}
        {/* col-lg-4 ve col-xxl-4 : Geniş büyük ekranlarda ekranları 4 birim gözükecek */}
        <div className='col-12 col-sm-12 col-md-3 col-lg-4 col-xxl-4'></div>

        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-4'>
          <form onSubmit={sendLogin}> {/*Form OnSubmit edildiğinde sendLogin fonsiyonunun referansını(Gövdesini) çağırıyoruz.*/}
            <div className='mb-3'>
              <h2>USER LOGIN</h2>
              <p>{email}</p> {/*Anlık olarak burası değişecek. OnChange eventi kullandığımız için. react avantajı.*/}
              {/* Type: Klavyenin e-mail formatında açılmasını sağlar. '@abc' ifadesini zorunlu kılar.*/}
              <input onChange={(evt) => setEmail(evt.target.value)} placeholder='E-Mail' type='email' className='form-control mb-3' />
              <input onChange={(evt) => setPassword(evt.target.value)} placeholder='Password' type='password' className='form-control mb-3' />
              <button className='btn btn-success'>Login</button>
            </div>
          </form>
        </div>

        <div className='col-12 col-sm-12 col-md-3 col-lg-4 col-xxl-4'></div>
      </div>
    </>
  )
}

export default Login