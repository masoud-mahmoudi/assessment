import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = {
  container:{
    height:'100vh',
    width:'100vh',
    alignItems:'center'
  },
  card: {
    maxWidth:'100vh' ,
    margin:10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',

  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
};
class DetailPage extends Component{

  constructor(props){
    super(props);
    this.state ={ item : null};

  }
  componentDidMount(){
    const _=require('underscore');
    let item = _.find(this.props.news.news, (item) => item.id == this.props.match.params.id);
    console.log(item);
    this.setState({item : item});
  }
  componentWillReveiveProps(nextProps){
    const _=require('underscore');
    let item = _.find(this.props.news.news, (item) => item.id == this.props.match.params.id);
    console.log(item);
    this.setState({item : item});
  }
  itemDetail = (item) => {
    console.log('in itemdetail',item);
    const imageURL = (item.media && item.media.length>0 && item.media[0] && item.media[0]['media-metadata'][0]) ? item.media[0]['media-metadata'][0].url :'./undefinded.png';
    return(
      <Card style={styles.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={styles.avatar}>R</Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={item.title}
          subheader={item.published_date}
        />
        <CardMedia
          style={styles.media}
          image={imageURL}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            {item.abstract}
          </Typography>
        </CardContent>
        <CardActions className={styles.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={classnames(styles.expand, {
                    [styles.expandOpen]: this.state.expanded,
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>

                  <Typography paragraph>
                    {item.abstract}
                  </Typography>

                </CardContent>
              </Collapse>
            </Card>
    );
  }
  render(){
    console.log('render detail Page');
    return(
      <div style={styles.container}>
      {(this.state.item) ? this.itemDetail(this.state.item) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const temp ={
    news: state.news
  };
  return temp;
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
