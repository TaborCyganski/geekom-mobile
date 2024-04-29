import { Text, TextProps } from './Themed';

export function MonoTextH1(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }, {fontSize: 24}]} />;
}

export function MonoTextH3(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }, {color: "gray"}]} />;
}
