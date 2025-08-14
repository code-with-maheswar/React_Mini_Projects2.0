import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){
    const INIT_URL='https://plus.unsplash.com/premium_photo-1733259804642-cbd490456515?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    const HOT_URL='https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const COLD_URL='https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww'
    const RAIN_URL='https://images.unsplash.com/photo-1564669126161-73ad11631b63?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div className="InfoBox">
        <div className="content_box">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
              sx={{ height: 140 }}
              image={info.humidity > 80? RAIN_URL:info.temp > 15? HOT_URL:COLD_URL}
            
              title="green iguana"/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          &nbsp;&nbsp;{info.humidity > 80?<ThunderstormIcon />:info.temp > 15?<SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
             <p>Tempreture={info.temp}&deg;c</p>
             <p>Humidity={info.humidity}</p>
             <p>Min Temp={info.temMin}&deg;c</p>
             <p>Max Temp={info.temMax}&deg;c</p>
             <p>
                The weather can be described as <i>{info.weather}</i> and
                feel like {info.feelslike}&deg;c
             </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>
    )
}