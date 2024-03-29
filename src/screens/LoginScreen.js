// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
// import { loginUser} from "../features/LoginSlice"
//
// const Login = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [data, setData] = useState({
//         phone: '', // Change from 'name' to 'phone'
//         password: '',
//     });
//     const { phone, password } = data;
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setData((prev) => ({ ...prev, [name]: value }));
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//
//         if (phone === '' || password === '') {
//             toast.error('Please fill all the fields');
//         } else {
//             const response = await dispatch(loginUser(data));
//
//             if (response.type === 'login/loginUser/fulfilled') {
//                 toast.success("You're logged in successfully");
//                 navigate('/');
//                 setData({
//                     phone: '', // Reset to initial state
//                     password: '',
//                 });
//             } else {
//                 toast.error('Login failed');
//             }
//         }
//     };
//
//     return (
//         <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//             <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-green-600 lg:max-w-xl">
//                 <h3 className="text-2xl font-semibold text-center text-green-500 underline uppercase decoration-wavy">
//                     Login form
//                 </h3>
//                 <form className="mt-6" onSubmit={handleSubmit}>
//                     <div className="mb-2">
//                         <label
//                             htmlFor="phone" // Change from 'name' to 'phone'
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Phone
//                         </label>
//                         <input
//                             id="phone"
//                             type="text"
//                             className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                             name="phone" // Change from 'name' to 'phone'
//                             value={phone}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="mb-2">
//                         <label
//                             htmlFor="password"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Password
//                         </label>
//                         <input
//                             name="password"
//                             value={password}
//                             onChange={handleChange}
//                             id="password"
//                             type="password"
//                             className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div>
//                     <div className="mt-6">
//                         <button
//                             type="submit"
//                             className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//                         >
//                             Login Now
//                         </button>
//                     </div>
//                     <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
//                         Don't have an account?
//                         <Link
//                             to="/register"
//                             className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
//                         >
//                             Register here
//                         </Link>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// export default Login;
// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation(); // вызываем хук за пределами функции

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add logic to send data to the server here
        console.log('Phone:', phone);
        console.log('Password:', password);
        // You can make API calls or navigate to another screen on successful login

        navigation.navigate('RoleSelection'); // использование объекта навигации для перехода на RoleSelection
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Вхід</Text>

            <TextInput
                style={styles.input}
                placeholder="Телефон"
                onChangeText={(text) => setPhone(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Вхід</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
        width: '100%',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LoginScreen;

