import React, {useRef} from 'react';
import {
        ContentTitle, 
        ContentLastUpdated, 
        ContentFeatureImage, 
        ContentVideo,
        ContentText
      } from '../components/content';

class AppUtils {

  static usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  static contentComponents(content){
    const items = [];
    var i = 0;
    for( item of content.body ){
      switch(item.key){
        case 'title':{
          items.push(
            <ContentTitle key={i} title={item.value}/>
          )
          break;
        }
        case 'posted':{
          items.push(
            <ContentLastUpdated key={i} dateTime={item.value}/>
          )
          break;
        }
        case 'thumbnail':{
          items.push(
            <ContentFeatureImage key={i} image={item.value}/>
          )
          break;
        }
        case 'video':{ 
          items.push(
            <ContentVideo key={i} videoUrl={item.value}/>
          )
          break;
        }
        case 'text':{
          items.push(
            <ContentText key={i} text={item.value} />
          );
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
