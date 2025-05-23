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
    url: string;
    location: string;
    time: string;
}

const imageMapping: Record<string, string> = {
    "Trafikolycka": "/assets/trafikolycka.png",
    "Rattfylleri": "/assets/trafikolycka.png", 
    "Brand": "/assets/brand.png",
    "Mord/dråp": "/assets/mord.png",
    "Narkotikabrott": "/assets/narkotikabrott.png",
    "Rån": "/assets/robbery.png"
  };

export default function MediaCard({ title, description, image, url, type, location, time }: MediaCardProps & { type: string }) {
    const baseType = type.split(',')[0].trim();
    const resolvedImage = image || imageMapping[baseType] || "/assets/default.png";
    
   
    const formatDateTime = (dateTimeStr: string) => {
      if (!dateTimeStr) return '';
      
      try {
        const date = new Date(dateTimeStr);
        return date.toLocaleString('sv-SE', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit', 
          minute: '2-digit'
        });
      } catch (error) {
        console.error('Error formatting date:', error);
        return dateTimeStr;
      }
    };

    const formattedTime = formatDateTime(time);

    return (
      <Card
        sx={{
          width: '100%',
          minHeight: '350px', 
          maxHeight: {xs: 'none', sm: '400px'},
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          overflow: 'hidden' 
        }}
      >
        <CardMedia
            sx={{ 
              height: {xs: '120px', sm: '150px'},
              width: '100%', 
              objectFit: 'cover' 
            }}
            image={resolvedImage}
            title={title}
            component="img"
        />
        <CardContent 
          sx={{ 
            flexGrow: 1, 
            overflow: 'hidden',
            padding: {xs: '12px', sm: '16px'}, 
            pb: 0 
          }}
        > 
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div" 
            sx={{ 
              fontSize: {xs: '1.1rem', sm: '1.25rem'},
              whiteSpace: 'nowrap', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis' 
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              display: '-webkit-box', 
              WebkitLineClamp: {xs: 2, sm: 3}, 
              WebkitBoxOrient: 'vertical',
              fontSize: {xs: '0.8rem', sm: '0.875rem'} 
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions 
          sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column'}, 
            alignItems: 'flex-start',
            mt: 'auto', 
            pt: 0,
            px: {xs: '12px', sm: '16px'}, 
            pb: {xs: '12px', sm: '16px'}
          }}
        >
          <Button
            size="small"
            href={`https://polisen.se${url}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{pb: 1}}
          >
            Mer på polisen
          </Button>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%',
            flexWrap: 'wrap', 
            gap: '4px' 
          }}>
            <Typography 
              variant="subtitle2" 
              sx={{
                fontSize: {xs: '0.7rem', sm: '0.8rem'}, 
                maxWidth: '60%', 
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {location}
            </Typography>
            <Typography 
              variant="subtitle2" 
              color="text.secondary"
              sx={{fontSize: {xs: '0.7rem', sm: '0.8rem'}}}
            >
              {formattedTime}
            </Typography>
          </div>
        </CardActions>
      </Card>
    );
}
