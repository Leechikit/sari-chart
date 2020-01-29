let exceldata = `日期	湖北省	广东省	北京市	上海市	浙江省	天津市	重庆市	江西省	山东省	河南省	湖南省	四川省	云南省	山西省	福建省	辽宁省	海南省	安徽省	贵州省	广西壮族自治区	宁夏回族自治区	河北省	江苏省	吉林省	黑龙江省	陕西省	新疆维吾尔自治区	甘肃省	内蒙古自治区	青海省	全国
2020年1月11日	41	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	41
2020年1月15日	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0
2020年1月16日	4	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	4
2020年1月17日	17	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	17
2020年1月18日	59	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	59
2020年1月19日	77	1	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	78
2020年1月20日	72	13	5	2	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	92
2020年1月21日	105	12	5	7	5	2	5	2	1	1	1	2	1	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	0	149
2020年1月22日	69	6	4	7	5	2	4	1	5	4	8	3	0	1	1	2	4	1	3	2	1	1	1	1	0	0	0	0	0	0	131
2020年1月23日	105	21	12	4	33	1	18	4	3	4	15	10	1	0	4	2	4	14	0	11	1	1	8	2	4	3	2	2	1	0	259
2020年1月24日	180	25	10	13	19	3	30	11	12	23	19	13	3	5	5	8	2	24	1	10	1	6	9	1	5	2	1	2	1	0	444
2020年1月25日	323	20	15	7	42	2	18	18	18	51	26	16	6	3	19	5	12	21	1	10	1	5	13	0	6	7	1	3	5	1	688
2020年1月26日	371	48	17	13	24	4	35	12	24	45	31	25	8	4	27	5	9	10	2	13	3	5	16	2	6	13	1	7	4	3	769
2020年1月27日	1291	42	12	13	45	9	22	24	12	40	43	21	7	7	3	5	9	36	2	5	4	15	23	2	9	13	5	5	2	2	1771
2020年1月28日	840	53	11	14	123	1	15	37	34	38	78	18	18	7	9	9	5	46	0	7	1	15	29	1	7	0	3	5	2	0	1459
累计	3554	241	91	80	296	24	147	109	121	206	221	108	44	27	82	36	43	152	9	58	12	45	99	9	37	46	13	24	15	6	5974`;

let result1 = [];

exceldata.split(/\n/).forEach((item, index) => {
  result1[index] = item.split(/\s+/);
});

let result2 = [];
result1.forEach(item => {
  item.forEach((dateCount, dateIndex) => {
    if (!result2[dateIndex]) result2[dateIndex] = [];
    result2[dateIndex].push(dateCount);
  });
});
result2.sort((a, b) => {
  let first = +a[a.length - 1];
  let second = +b[b.length - 1];
  if (isNumber(first) && isNumber(second)) {
    return second - first;
  } else {
    return 0;
  }
});

let result3 = [];
result2.forEach((item, index) => {
  item.reduce((accumulator, currentValue, currentIndex) => {
    if (!result3[index]) result3[index] = [];

    if (currentIndex === 0 || currentIndex === item.length - 1) {
      result3[index].push(currentValue);
      return currentValue;
    }
    if (isNumber(+accumulator) && isNumber(+currentValue)) {
      result3[index].push(+accumulator + +currentValue);
      return +accumulator + +currentValue;
    } else {
      result3[index].push(currentValue);
      return currentValue;
    }
  }, 0);
});
result3.sort((a, b) => {
  let first = +a[a.length - 1];
  let second = +b[b.length - 1];
  if (isNumber(first) && isNumber(second)) {
    return second - first;
  } else {
    return 0;
  }
});
function isNumber(n) {
  return Number(n) === n;
}

export default {
  citySplit: result2,
  cityAddup: result3
};
