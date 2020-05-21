import React from 'react';
import {ContentTitle, ContentLastUpdated, ContentFeatureImage} from '../components/content';

class AppUtils {

  static contentComponents(content){
    const items = [];
    var i = 0;
    for( item of content.body ){
      console.log(item, "off")
      switch(Object.keys(item)[0]){
        case 'title':{
          items.push(
            <ContentTitle key={i} title={item.title}/>
          )
          break;
        }
        case 'posted':{
          items.push(
            <ContentLastUpdated key={i}/>
          )
          break;
        }
        case 'thumbnail':{
          items.push(
            <ContentFeatureImage key={i} image={item.thumbnail}/>
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

    return items;
  }
}

export default AppUtils;
