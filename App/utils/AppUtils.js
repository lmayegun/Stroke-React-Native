import React from 'react';
import {ContentTitle, ContentLastUpdated, ContentFeatureImage} from '../components/content';

class AppUtils {

  static contentComponents(content){
    // console.log(content)
    const items = [];
    var i = 0;
    for( item of Object.keys(content.body) ){

      switch(item){
        case 'title':{
          items.push(
            <ContentTitle key={i} title={content.body.title}/>
          )
          break;
        }
        case 'updateTime':{
          items.push(
            <ContentLastUpdated key={i}/>
          )
          break;
        }
        case 'thumbnail':{
          items.push(
            <ContentFeatureImage key={i} image={content.body.thumbnail}/>
          )
          break;
        }
        default:{
          items.push(
            null
          )
        }
      }
      i++;
    }

    console.log(i)

    return items;
  }
}

export default AppUtils;
