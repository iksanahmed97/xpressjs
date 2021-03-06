import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { Text, View ,TouchableOpacity,TextInput } from 'react-native';
import { styles } from './style';
import { useState } from 'react';
import { Divider } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const List = () => {
    const [gender, setGender] = useState('');
    const [nama, setNama] = useState('');

    var MongoClient = require('mongodb').MongoClient

    MongoClient.connect('mongodb+srv://iksan:iksan@biodata.y2yad.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (err, db) {
      if (err) throw err
    
      db.collection('List').find().toArray(function (err, result) {
        if (err) throw err
    
        console.log(result)
      })
    })


        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <View>
                    <Text style={styles.label}>Search By</Text>
                    <Picker mode={'dropdown'} style={styles.input} selectedValue={gender} onValueChange={value => setGender(value)}>
                        <Picker.Item label="Nama" value="Nama" />
                        <Picker.Item label="Email" value="Email" />
                        <Picker.Item label="Phone" value="Phone" />
                        <Picker.Item label="Address" value="Address" />
                    </Picker>
                    </View>
                    <Divider />
                    <View>
                    <Text style={styles.label}>Keyword</Text>
                    <TextInput
                        onChangeText={text => setNama(text)}
                        value={nama}
                        style={styles.input}
                        placeholder="Masukkan Nama"
                    />
                </View>


                    <TouchableOpacity style={styles.tombol} >
                <Text style={styles.textTombol}>Search</Text>
            </TouchableOpacity>
            </KeyboardAwareScrollView>
                </View>
                
                
        )
    }
    export default List;
