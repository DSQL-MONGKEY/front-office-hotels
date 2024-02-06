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
         backgroundColor="#ffffff"
         foregroundColor="#ecebeb"
      >
      <Rect x="49" y="19" rx="3" ry="3" width="88" height="6" />
      <Rect x="49" y="38" rx="3" ry="3" width="52" height="6" />
      <Rect x="1" y="68" rx="3" ry="3" width="410" height="6" />
      <Rect x="1" y="84" rx="3" ry="3" width="380" height="6" />
      <Rect x="1" y="100" rx="3" ry="3" width="178" height="6" />
      <Circle cx="21" cy="32" r="20" />
      <Rect x="50" y="123" rx="3" ry="3" width="88" height="6" />
      <Rect x="50" y="142" rx="3" ry="3" width="52" height="6" />
      <Rect x="2" y="172" rx="3" ry="3" width="410" height="6" />
      <Rect x="2" y="188" rx="3" ry="3" width="380" height="6" />
      <Rect x="2" y="204" rx="3" ry="3" width="178" height="6" />
      <Circle cx="22" cy="136" r="20" />
      <Rect x="49" y="226" rx="3" ry="3" width="88" height="6" />
      <Rect x="49" y="245" rx="3" ry="3" width="52" height="6" />
      <Rect x="1" y="275" rx="3" ry="3" width="410" height="6" />
      <Rect x="1" y="291" rx="3" ry="3" width="380" height="6" />
      <Rect x="1" y="307" rx="3" ry="3" width="178" height="6" />
      <Circle cx="21" cy="239" r="20" />
      <Rect x="52" y="329" rx="3" ry="3" width="88" height="6" />
      <Rect x="52" y="348" rx="3" ry="3" width="52" height="6" />
      <Rect x="4" y="378" rx="3" ry="3" width="410" height="6" />
      <Rect x="4" y="394" rx="3" ry="3" width="380" height="6" />
      <Rect x="4" y="410" rx="3" ry="3" width="178" height="6" />
      <Circle cx="24" cy="342" r="20" />
      </ContentLoader>
   );
};

export default SkeletonList;
