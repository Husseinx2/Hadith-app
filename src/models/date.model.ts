interface HijriDate {
  code: number;
  status: string;
  data: {
    hijri: {
      date: string;
      day: number;
      month: {
        en: string;
      };
      year: number;
    };
    gregorian: {
      date: string;
      day: number;
      month: {
        en: string;
      };
      year: number;
    };
  };
}
export default HijriDate;
