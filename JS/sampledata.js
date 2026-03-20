//  EXAMPLE DATA — pre-loaded on first visit
// ──────────────────────────────────────────────────────────────────────────────
const EXAMPLE_DATA = [
  {sale_date:'2024-01-05',outlet_name:'Connaught Place DV',region:'Delhi NCR',zone:'North',fuel_type:'Petrol',quantity_sold:52.3,unit_price:94.72,discount_pct:0,payment_mode:'UPI',shift:'Morning'},
  {sale_date:'2024-01-08',outlet_name:'Andheri West DV',region:'Mumbai Metro',zone:'West',fuel_type:'Diesel',quantity_sold:88.0,unit_price:87.62,discount_pct:0.5,payment_mode:'Fleet Card',shift:'Afternoon'},
  {sale_date:'2024-01-12',outlet_name:'Indiranagar DV BLR',region:'Bengaluru Urban',zone:'South',fuel_type:'Petrol',quantity_sold:41.5,unit_price:94.72,discount_pct:0,payment_mode:'Card',shift:'Morning'},
  {sale_date:'2024-01-18',outlet_name:'T Nagar DV Chennai',region:'Chennai Metro',zone:'South',fuel_type:'CNG',quantity_sold:30.0,unit_price:76.00,discount_pct:0,payment_mode:'Cash',shift:'Night'},
  {sale_date:'2024-01-22',outlet_name:'Salt Lake DV Kolkata',region:'Kolkata Metro',zone:'East',fuel_type:'Diesel',quantity_sold:110.0,unit_price:87.62,discount_pct:1,payment_mode:'UPI',shift:'Morning'},
  {sale_date:'2024-02-03',outlet_name:'Banjara Hills DV HYD',region:'Hyderabad',zone:'South',fuel_type:'Power (Premium)',quantity_sold:28.0,unit_price:102.00,discount_pct:0,payment_mode:'Card',shift:'Afternoon'},
  {sale_date:'2024-02-09',outlet_name:'Satellite DV Ahmd',region:'Ahmedabad',zone:'West',fuel_type:'Petrol',quantity_sold:65.0,unit_price:94.72,discount_pct:0,payment_mode:'Cash',shift:'Morning'},
  {sale_date:'2024-02-14',outlet_name:'Pune Highway DV',region:'Pune',zone:'West',fuel_type:'Diesel',quantity_sold:145.0,unit_price:87.62,discount_pct:2,payment_mode:'Fleet Card',shift:'Afternoon'},
  {sale_date:'2024-02-20',outlet_name:'Rohini Sector DV',region:'Delhi NCR',zone:'North',fuel_type:'CNG',quantity_sold:22.5,unit_price:76.00,discount_pct:0,payment_mode:'UPI',shift:'Morning'},
  {sale_date:'2024-02-27',outlet_name:'Thane Highway DV',region:'Mumbai Metro',zone:'West',fuel_type:'HSD Industrial',quantity_sold:200.0,unit_price:85.00,discount_pct:1.5,payment_mode:'Credit',shift:'Night'},
  {sale_date:'2024-03-05',outlet_name:'Connaught Place DV',region:'Delhi NCR',zone:'North',fuel_type:'Power (Premium)',quantity_sold:35.0,unit_price:102.00,discount_pct:0,payment_mode:'Card',shift:'Morning'},
  {sale_date:'2024-03-11',outlet_name:'Andheri West DV',region:'Mumbai Metro',zone:'West',fuel_type:'Petrol',quantity_sold:78.0,unit_price:94.72,discount_pct:0,payment_mode:'UPI',shift:'Afternoon'},
  {sale_date:'2024-03-19',outlet_name:'Indiranagar DV BLR',region:'Bengaluru Urban',zone:'South',fuel_type:'Diesel',quantity_sold:92.0,unit_price:87.62,discount_pct:0.5,payment_mode:'Card',shift:'Morning'},
  {sale_date:'2024-04-02',outlet_name:'T Nagar DV Chennai',region:'Chennai Metro',zone:'South',fuel_type:'Petrol',quantity_sold:48.0,unit_price:94.72,discount_pct:0,payment_mode:'Cash',shift:'Night'},
  {sale_date:'2024-04-10',outlet_name:'Banjara Hills DV HYD',region:'Hyderabad',zone:'South',fuel_type:'LPG',quantity_sold:18.0,unit_price:68.00,discount_pct:0,payment_mode:'UPI',shift:'Morning'},
  {sale_date:'2024-04-17',outlet_name:'Satellite DV Ahmd',region:'Ahmedabad',zone:'West',fuel_type:'Diesel',quantity_sold:130.0,unit_price:87.62,discount_pct:1,payment_mode:'Fleet Card',shift:'Afternoon'},
  {sale_date:'2024-05-03',outlet_name:'Pune Highway DV',region:'Pune',zone:'West',fuel_type:'Petrol',quantity_sold:55.0,unit_price:94.72,discount_pct:0,payment_mode:'UPI',shift:'Morning'},
  {sale_date:'2024-05-14',outlet_name:'Salt Lake DV Kolkata',region:'Kolkata Metro',zone:'East',fuel_type:'CNG',quantity_sold:40.0,unit_price:76.00,discount_pct:0,payment_mode:'Cash',shift:'Afternoon'},
  {sale_date:'2024-05-21',outlet_name:'Rohini Sector DV',region:'Delhi NCR',zone:'North',fuel_type:'Power (Premium)',quantity_sold:25.0,unit_price:102.00,discount_pct:0,payment_mode:'Card',shift:'Morning'},
  {sale_date:'2024-06-06',outlet_name:'Thane Highway DV',region:'Mumbai Metro',zone:'West',fuel_type:'Diesel',quantity_sold:175.0,unit_price:87.62,discount_pct:2,payment_mode:'Fleet Card',shift:'Night'},
  {sale_date:'2024-06-15',outlet_name:'Connaught Place DV',region:'Delhi NCR',zone:'North',fuel_type:'Petrol',quantity_sold:60.0,unit_price:94.72,discount_pct:0,payment_mode:'UPI',shift:'Morning'},
  {sale_date:'2024-07-04',outlet_name:'Andheri West DV',region:'Mumbai Metro',zone:'West',fuel_type:'CNG',quantity_sold:35.0,unit_price:76.00,discount_pct:0,payment_mode:'Cash',shift:'Afternoon'},
  {sale_date:'2024-07-19',outlet_name:'Indiranagar DV BLR',region:'Bengaluru Urban',zone:'South',fuel_type:'Petrol',quantity_sold:70.0,unit_price:94.72,discount_pct:0.5,payment_mode:'UPI',shift:'Morning'},
  {sale_date:'2024-08-08',outlet_name:'T Nagar DV Chennai',region:'Chennai Metro',zone:'South',fuel_type:'Diesel',quantity_sold:98.0,unit_price:87.62,discount_pct:1,payment_mode:'Card',shift:'Afternoon'},
  {sale_date:'2024-08-22',outlet_name:'Banjara Hills DV HYD',region:'Hyderabad',zone:'South',fuel_type:'Petrol',quantity_sold:44.0,unit_price:94.72,discount_pct:0,payment_mode:'UPI',shift:'Morning'},
  {sale_date:'2024-09-10',outlet_name:'Satellite DV Ahmd',region:'Ahmedabad',zone:'West',fuel_type:'HSD Industrial',quantity_sold:250.0,unit_price:85.00,discount_pct:2,payment_mode:'Credit',shift:'Night'},
  {sale_date:'2024-10-03',outlet_name:'Pune Highway DV',region:'Pune',zone:'West',fuel_type:'Petrol',quantity_sold:62.0,unit_price:94.72,discount_pct:0,payment_mode:'Cash',shift:'Morning'},
  {sale_date:'2024-10-18',outlet_name:'Salt Lake DV Kolkata',region:'Kolkata Metro',zone:'East',fuel_type:'Power (Premium)',quantity_sold:20.0,unit_price:102.00,discount_pct:0,payment_mode:'Card',shift:'Afternoon'},
  {sale_date:'2024-11-07',outlet_name:'Thane Highway DV',region:'Mumbai Metro',zone:'West',fuel_type:'Diesel',quantity_sold:160.0,unit_price:87.62,discount_pct:1.5,payment_mode:'Fleet Card',shift:'Morning'},
  {sale_date:'2024-12-01',outlet_name:'Connaught Place DV',region:'Delhi NCR',zone:'North',fuel_type:'Petrol',quantity_sold:80.0,unit_price:94.72,discount_pct:0,payment_mode:'UPI',shift:'Morning'},
].map(r => {
  r.gross_revenue = parseFloat((r.quantity_sold * r.unit_price).toFixed(2));
  r.net_revenue   = parseFloat((r.gross_revenue * (1 - r.discount_pct / 100)).toFixed(2));
  return r;
});
