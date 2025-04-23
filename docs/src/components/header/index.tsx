import './styles.css'
import banner from "../../assets/banner.png"

export function Header() {
    return (
        <div className="header">
            <img src={banner} className="banner" />

        </div>
    )
}