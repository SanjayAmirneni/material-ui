import React from "react";
import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import {Avatar, IconButton, CardMedia} from '@material-ui/core';

const Product = (props) =>{
    const {avatarUrl, title, description, imageUrl} = props;

    return (
        <Card>
            <CardHeader 
                avatar={<Avatar src={avatarUrl}
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                } />
                }
                title = {title}
            />
            <CardMedia style={{height:"150px"}} image={imageUrl} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy Now</Button>
                <Button size="small">Offer</Button>
            </CardActions>
        </Card>
    )

}

export default Product;