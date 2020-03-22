/**
 * Calendar Picker Component
 *
 * Copyright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
const DEFAULT_SELECTED_BACKGROUND_COLOR = '#ec6565';
const DEFAULT_SELECTED_TEXT_COLOR = '#fff';
const DEFAULT_TODAY_BACKGROUND_COLOR = '#ec6565';

function getBorderRadiusByShape(scaler, dayShape) {
  if (dayShape === 'square') {
    return 0;
  } else {
    return 30*scaler;
  }
}

export function makeStyles(scaler, backgroundColor, textColor, todayBackgroundColor, dayShape) {
  const SELECTED_BG_COLOR = backgroundColor ? backgroundColor : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = textColor ? textColor : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor ? todayBackgroundColor : DEFAULT_TODAY_BACKGROUND_COLOR;

  return {
    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },

    dayButton: {
      width: 30*scaler,
      height: 30*scaler,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabel: {
      fontSize: 14*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    selectedDayLabel: {
      color: SELECTED_TEXT_COLOR,
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      fontWeight: 'bold',
      borderBottomWidth: 1,
      borderTopWidth: 0,
      paddingTop: 10*scaler,
      paddingBottom: 10*scaler,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: 'rgba(0,0,0,0.2)'
    },

    daysWrapper: {
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabels: {
      width: 50*scaler,
      fontSize: 12*scaler,
      color: '#000',
      textAlign: 'center'
    },

    selectedDay: {
      width: 30*scaler,
      height:30*scaler,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: 'center',
      justifyContent: 'center'
    },

    selectedDayBackground: {
      backgroundColor: SELECTED_BG_COLOR,
    },

    selectedToday: {
      width: 30*scaler,
      height:30*scaler,
      backgroundColor: TODAY_BG_COLOR,
      borderRadius: getBorderRadiusByShape(scaler, dayShape),
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50*scaler,
      height: 40*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    startDayWrapper: {
      width: 50*scaler,
      height: 30*scaler,
      borderTopLeftRadius: 20*scaler,
      borderBottomLeftRadius: 20*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    endDayWrapper: {
      width: 50*scaler,
      height: 30*scaler,
      borderTopRightRadius: 20*scaler,
      borderBottomRightRadius: 20*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    inRangeDay: {
      width: 50*scaler,
      height: 30*scaler,
      backgroundColor: SELECTED_BG_COLOR,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthLabel: {
      fontSize: 17*scaler,
      color: '#000',
      marginBottom: 10*scaler,
      marginLeft: 20*scaler,
      width: 180*scaler,
      textAlign: 'left',
      fontWeight: 'bold'
    },

    headerWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      
      padding: 5*scaler,
      paddingBottom: 3*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthSelector: {
      marginBottom: 10*scaler,
      fontSize: 14*scaler,
      marginHorizontal: 10*scaler,
      color: "#ff5a60"
    },

    prev: {
      textAlign: 'left'
    },

    next: {
      textAlign: 'right'
    },

    yearLabel: {
      fontSize: 14*scaler,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledText: {
      fontSize: 14*scaler,
      color: '#BBBBBB',
      alignSelf: 'center',
      justifyContent: 'center'
    }
  };
}
