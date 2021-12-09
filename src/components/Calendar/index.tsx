import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  Calendar as CustomCalendar,
  DateCallbackHandler,
  LocaleConfig,
} from "react-native-calendars";

import { ptBR } from "./localeConfig";
import { generateInterval } from "./generateInterval";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

export { generateInterval };

export interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

export interface DayProps {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          name={direction === "left" ? "chevron-left" : "chevron-right"}
          size={24}
          color={theme.colors.main}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
        todayTextColor: theme.colors.main,
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}
