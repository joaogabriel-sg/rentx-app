import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNameShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";

export function Calendar() {
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
    />
  );
}
