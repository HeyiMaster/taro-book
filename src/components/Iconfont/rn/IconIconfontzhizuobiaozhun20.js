/* eslint-disable */

import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconIconfontzhizuobiaozhun20 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M824.314587 659.107429c-24.52251-14.159488-52.374858-21.641903-80.546477-21.641903-27.841092 0-55.371098 7.237845-79.614246 20.929682-19.84907 11.211343-37.060057 26.565029-50.537 44.919049l-193.054901-111.457488c21.162995-37.141922 26.731828-80.291674 15.659655-121.618918-3.618411-13.501502-8.880251-26.28055-15.601326-38.125319l192.997596-111.425765c13.475919 18.355043 30.686906 33.706683 50.537 44.919049 24.242124 13.69286 51.77213 20.929682 79.614246 20.929682 28.17162 0 56.023968-7.482415 80.546477-21.640879 37.325094-21.549805 64.024176-56.344263 75.181283-97.975429 11.155061-41.632189 5.430686-85.11554-16.121166-122.440633-14.425547-24.985044-35.262108-45.652759-60.257385-59.771315-24.243147-13.69286-51.773154-20.930705-79.614246-20.930705-28.170596 0-56.022944 7.483438-80.545454 21.641903-71.864748 41.491996-99.739609 130.297578-67.075675 204.581422l-196.200544 113.275903c-11.059893-12.106736-24.031323-22.579251-38.641065-31.014364-24.52251-14.157441-52.374858-21.640879-80.546477-21.640879-27.840068 0-55.370075 7.236821-79.614246 20.930705-24.995277 14.117532-45.831838 34.786271-60.256362 59.772338-21.550829 37.325094-27.275203 80.808444-16.120143 122.438587s37.855166 76.426647 75.181283 97.976452c24.51944 14.156418 52.370765 21.639856 80.543408 21.640879 0.004093 0 0.005117 0 0.00921 0 27.836999 0 55.364959-7.236821 79.607082-20.928658 14.897292-8.414647 28.300556-19.170618 39.765679-31.765471l196.265012 113.311719c-14.778588 33.495882-17.709337 70.738088-8.098445 106.610086 11.156084 41.631166 37.85619 76.426647 75.181283 97.975429 24.51944 14.157441 52.371788 21.639856 80.544431 21.641903 0.00307 0 0.005117 0 0.008186 0 27.836999 0 55.364959-7.236821 79.608106-20.929682 24.994254-14.117532 45.830815-34.786271 60.256362-59.772338 21.551852-37.325094 27.276227-80.808444 16.121166-122.438587C888.338762 715.450668 861.638657 680.656211 824.314587 659.107429zM682.589748 119.42188c18.561751-10.717086 39.624463-16.382109 60.912301-16.382109 43.552935 0 84.117816 23.400966 105.867166 61.069891 16.306384 28.243251 20.638039 61.144592 12.196787 92.645027-8.44023 31.500435-28.64234 57.828057-56.885592 74.133418-18.561751 10.717086-39.625486 16.381086-60.913325 16.381086-43.552935 0-84.117816-23.399943-105.867166-61.068867C604.241332 227.8995 624.288924 153.082514 682.589748 119.42188zM280.229844 634.113175c-21.289885 0-42.35362-5.664-60.912301-16.380062-28.243251-16.306384-48.445362-42.634006-56.885592-74.134441-8.441253-31.499411-4.110621-64.400752 12.195763-92.64298 21.748327-37.669948 62.314231-61.070914 105.866143-61.070914 21.288862 0 42.352597 5.664 60.913325 16.381086 28.243251 16.305361 48.445362 42.632983 56.886615 74.133418 8.439206 31.500435 4.107551 64.403822-12.19781 92.645027C364.345614 610.716302 323.780733 634.117268 280.229844 634.113175zM849.370239 859.890338c-21.751397 37.670971-62.315254 61.071937-105.866143 61.069891-21.290909-0.001023-42.354644-5.665023-60.913325-16.381086-28.242228-16.307408-48.445362-42.634006-56.885592-74.134441s-4.109598-64.401776 12.195763-92.64298c21.74935-37.669948 62.315254-61.070914 105.867166-61.070914 21.288862 0 42.352597 5.665023 60.913325 16.381086 28.243251 16.306384 48.445362 42.634006 56.885592 74.134441C870.008278 798.74677 865.6756 831.647087 849.370239 859.890338z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIconfontzhizuobiaozhun20.defaultProps = {
  size: 36,
};

export default IconIconfontzhizuobiaozhun20;
