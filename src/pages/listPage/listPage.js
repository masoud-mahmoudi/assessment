import React, { Component } from 'react';
import {connect} from 'react-redux';
import  ApiService from '../../api/services';
///material ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  container:{
    height:'100vh',
    width:'100vh'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});
class ListPage extends Component{


  componentDidMount(){
    console.log('componentDidMount');
    this.props.getNewsList();
  }

  pressList = (item) => {
    console.log('detailPressed');
    this.props.history.push('/detail/'+item.id);
  }
  renderList = () => {
    return (
    <List style={styles.root}>
      {
        this.props.news.news.map((item,key) =>
          <ListItem alignItems="flex-start" key={key}>
            <ListItemAvatar>
              <Avatar alt="Image" src={(item.media && item.media.length>0 && item.media[0] && item.media[0]['media-metadata'][0]) ? item.media[0]['media-metadata'][0].url :'./undefinded.png'} />
            </ListItemAvatar>
            <ListItemText
              onClick={this.pressList.bind(this,item)}
              primary={item.title}
              secondary={
                <React.Fragment>
                  <Typography component="span"  color="textPrimary">
                    {item.byline}
                    </Typography>
                    {item.abstract}
                  </React.Fragment>
              }/>
          </ListItem>
        )
      }
    </List>);
  }
  render(){
    console.log('in orginal file',this.props.news);
    return (
      <div className={styles.container}>
        {(this.props.news && this.props.news.news) ? this.renderList(this) : null }
      </div>
    )
  }
}
const mapStateToProps = state => {
  const temp ={
    news: state.news
  };
  return temp;
}
const mapDispatchToProps = dispatch => {
  return {
    getNewsList : () =>{
      dispatch(ApiService.getNewsList());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
