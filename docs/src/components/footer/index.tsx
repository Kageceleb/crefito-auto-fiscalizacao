import { FacebookOutlined, InstagramOutlined, SearchOutlined, WhatsAppOutlined, YoutubeOutlined } from '@ant-design/icons'
import './styles.css'

export function Footer() {
    return (
        <div className="footer">
            <div className='doubts'>
                <p><SearchOutlined /> ESCREVA SUA DÚVIDA...</p>


            </div>
            <div className='social-media'>
                <p><InstagramOutlined /> @crefito5</p>
                <p><FacebookOutlined /> crefito5</p>
                <p><YoutubeOutlined /> @TVCrefito5</p>
                <p><WhatsAppOutlined /> (51) 3334-6586 </p>
            </div>
        </div>
    )
}