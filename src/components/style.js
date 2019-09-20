// @flow
import { Text, StyleSheet, Platform } from 'react-native';

export const STEP_NUMBER_RADIUS: number = 13;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 100;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = 4;
export const ARROW_SIZE: number = 6;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: ZINDEX,
  },
  arrow: {
    position: 'absolute',
    borderColor: 'transparent',
    borderWidth: ARROW_SIZE,
  },
  tooltip: {
    position: 'absolute',
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fbfbfb',
    borderRadius: 5,
    borderColor: '#aaa',
    borderWidth: 1.2,
    overflow: 'hidden',
  },
  tooltipText: {
    color: '#222',
    lineHeight: 22,
    fontWeight: '500',
    ...Platform.select({
      ios: { fontFamily: 'PingFang TC' },
      android: { fontFamily: 'sans-serif' },
    }),
  },
  tooltipContainer: {
    flex: 1,
  },
  stepNumberContainer: {
    position: 'absolute',
    width: STEP_NUMBER_DIAMETER,
    height: STEP_NUMBER_DIAMETER,
    overflow: 'hidden',
    zIndex: ZINDEX + 1,
  },
  stepNumber: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: STEP_NUMBER_RADIUS,
    borderColor: '#FFFFFF',
    backgroundColor: '#049dbf',
  },
  stepNumberText: {
    fontSize: 11,
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontWeight: '500',
    ...Platform.select({
      ios: { fontFamily: 'PingFang TC' },
      android: { fontFamily: 'sans-serif' },
    }),
  },
  button: {
    padding: 15,
  },
  buttonText: {
    color: '#049dbf',
    ...Platform.select({
      ios: { fontFamily: 'PingFang TC' },
      android: { fontFamily: 'sans-serif' },
    }),
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  overlayRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  overlayContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
});
