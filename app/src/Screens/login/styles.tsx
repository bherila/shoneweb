import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { AppColors } from '../../utils/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: wp(5),
    backgroundColor: AppColors.WHITE,
  },
  termsServicesContainer: {
    paddingHorizontal: wp(6),
  },
  creatorTextContainer: {
    marginVertical: wp(4),
  },
  countryCodeText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'grey',
  },
  _logView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgb(246,246,246)',
  },
  _bodyView: {
    flex: 1,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    marginLeft: -40,
    marginRight: -40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  _logo: {
    top: wp(10),
    height: wp(18),
    width: '100%',
    alignSelf: 'center',
  },
  _inputFiled: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderRadius: 5,
    alignSelf: 'center',
    width: '96%',
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  _card: {
    width: '78%',
    marginTop: -110,
    padding: 10,
    borderRadius: 10,
  },
  _input: {
    // marginVertical: wp(4),
  },
  _continue_btn: {
    width: '96%',
    marginVertical: 20,
    height: 55,
    borderRadius: 10,
  },
  _btn_text: {
    color: AppColors.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  _login_desc: {
    textAlign: 'center',
    fontSize: 18,
    color: '#525252',
  },
  _footer_text: {
    textAlign: 'center',
    color: AppColors.WHITE,
    fontWeight: '300',
    fontSize: 17,
  },
  _fotter_row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  _fb_btn: {
    height: 60,
    width: 60,
    backgroundColor: '#4166b2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  _apple_btn: {
    height: 60,
    width: 60,
    backgroundColor: AppColors.WHITE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
  },
  _footerBox: {
    backgroundColor: AppColors.WHITE,
    width: '70%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 10,
  },
  _box_text: {
    textAlign: 'center',
  },
})

export default styles
