import React, { Component } from "react";
import {
  StyleSheet,
  Input,
  TextInputProps,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Picker,
  Modal
} from "react-native";

import TimePicker from "react-native-simple-time-picker";

class AddWorkoutDay extends Component {
  state = {
    day: "choose a day",
    from: { selectedHours: 0, selectedMinutes: 0 },
    to: { selectedHours: 0, selectedMinutes: 0 }
  };

  render() {
    return (
      <Modal visible={this.props.visible} animationType="slide">
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222"
          }}
        >
          <View style={style.container}>
            <Picker
              selectedValue={this.state.day}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ day: itemValue })
              }
            >
              <Picker.Item label="choose a day" value="none" />
              <Picker.Item label="Mon" value="Mon" />
              <Picker.Item label="Tue" value="Tue" />
              <Picker.Item label="Wed" value="Wed" />
              <Picker.Item label="Thu" value="Thu" />
              <Picker.Item label="Fri" value="Fri" />
              <Picker.Item label="Sat" value="Sat" />
              <Picker.Item label="Sun" value="Sun" />
            </Picker>
          </View>
          <View style={style.container}>
            <Text style={style.textStyle}>from</Text>
            <Text style={style.textStyle}>
              {this.state.from.selectedHours < 10
                ? "0" + this.state.from.selectedHours
                : this.state.from.selectedHours}
              :
              {this.state.from.selectedMinutes < 10
                ? "0" + this.state.from.selectedMinutes
                : this.state.from.selectedMinutes}
            </Text>
            <TimePicker
              selectedHours={this.state.from.selectedHours}
              selectedMinutes={this.state.from.selectedMinutes}
              onChange={(hours, minutes) =>
                this.setState({
                  from: {
                    selectedHours: hours,
                    selectedMinutes: minutes
                  }
                })
              }
            />
          </View>
          <View style={style.container}>
            <Text style={style.textStyle}>to</Text>
            <Text style={style.textStyle}>
              {this.state.to.selectedHours < 10
                ? "0" + this.state.to.selectedHours
                : this.state.to.selectedHours}
              :
              {this.state.to.selectedMinutes < 10
                ? "0" + this.state.to.selectedMinutes
                : this.state.to.selectedMinutes}
            </Text>
            <TimePicker
              selectedHours={this.state.to.selectedHours}
              selectedMinutes={this.state.to.selectedMinutes}
              onChange={(hours, minutes) =>
                this.setState({
                  to: {
                    selectedHours: hours,
                    selectedMinutes: minutes
                  }
                })
              }
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{ margin: 30 }}>
              <Button
                title="Add"
                onPress={this.props.addDay.bind(this, this.state)}
              />
            </View>
            <View style={{ margin: 30 }}>
              <Button
                title="Cancel"
                onPress={this.props.cancel}
              />
            </View>
          </View>
        </ScrollView>
      </Modal>
    );
  }
}

const style = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: "#222",
    padding: 40,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#111",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 1
  },
  textStyle: {
    color: "#5b5b5b",
    alignSelf: "center"
  }
});

export default AddWorkoutDay;