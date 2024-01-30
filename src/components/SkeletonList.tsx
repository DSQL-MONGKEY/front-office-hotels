/* eslint-disable prettier/prettier */
import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

const SkeletonList = () => {
   return (
      <ContentLoader
         speed={1}
         width={476}
         height={300}
         viewBox="0 0 476 300"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <Rect x="50" y="20" rx="3" ry="3" width="88" height="6" />
         <Rect x="50" y="38" rx="3" ry="3" width="52" height="6" />
         <Rect x="-1" y="63" rx="3" ry="3" width="275" height="6" />
         <Rect x="0" y="75" rx="3" ry="3" width="232" height="6" />
         <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
         <Circle cx="22" cy="32" r="20" />

         <Rect x="52" y="113" rx="3" ry="3" width="88" height="6" />
         <Rect x="52" y="131" rx="3" ry="3" width="52" height="6" />
         <Rect x="1" y="156" rx="3" ry="3" width="275" height="6" />
         <Rect x="2" y="168" rx="3" ry="3" width="232" height="6" />
         <Rect x="2" y="181" rx="3" ry="3" width="178" height="6" />
         <Circle cx="24" cy="125" r="20" />

         <Rect x="53" y="203" rx="3" ry="3" width="88" height="6" />
         <Rect x="53" y="221" rx="3" ry="3" width="52" height="6" />
         <Rect x="2" y="246" rx="3" ry="3" width="275" height="6" />
         <Rect x="3" y="258" rx="3" ry="3" width="232" height="6" />
         <Rect x="3" y="271" rx="3" ry="3" width="178" height="6" />
         <Circle cx="25" cy="215" r="20" />
      </ContentLoader>
   );
};

export default SkeletonList;
