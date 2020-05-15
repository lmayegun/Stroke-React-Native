import React from 'react';
import {ContentTitle, ContentLastUpdated, ContentFeatureImage} from '../components/content';

class AppUtils {

  static contentComponents(content){
    const items = [];
    var i = 0;
    for( item of Object.keys(content) ){
      switch(item){
        case 'title':{
          items.push(
            <ContentTitle key={i}/>
          )
          break;
        }
        case 'updateTime':{
          items.push(
            <ContentLastUpdated />
          )
          break;
        }
        case 'image':{
          items.push(
            <ContentFeatureImage image={content.image} />
          )
          break;
        }
        default:{
          return null
        }
      }
      i++;
    }

    return items;
  }
}

export default AppUtils;
