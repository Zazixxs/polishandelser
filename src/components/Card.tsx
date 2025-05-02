
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps{
    title: string;
    description: string;
    image: string
    url:string;
    location:string;
}

const imageMapping: Record<string, string> = {
    "Trafikolycka": "/assets/trafikolycka.png",
    "Rattfylleri": "/assets/trafikolycka.png", // same image reused
    "Brand": "/assets/brand.png",
    "Mord/dråp": "/assets/mord.png",
    "Narkotikabrott": "/assets/narkotikabrott.png",
    "Rån": "/assets/robbery.png"
  };

export default function MediaCard({ title, description, image, url, type, location }: MediaCardProps & { type: string }) {
    const baseType = type.split(',')[0].trim();
    const resolvedImage = image || imageMapping[baseType] || "/src/assets/default.png";

    return (
      <Card sx={{ width: 345, height: 400, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
            sx={{ height: 150, width: '100%', objectFit: 'cover' }}
            image={resolvedImage}
            title={title}
            component="img"
        />
        <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}> 
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div" 
            sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }} // Begränsa beskrivning
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href={`https://polisen.se${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Mer på polisen
          </Button>
          <h5>{location}</h5>
        </CardActions>
      </Card>
    );
}
