import { useEffect, useState, useRef } from "react"
import { StyleSheet, Animated } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import StartupPage from "./pages/StartupPage"
import LoginPage from "./pages/LoginPage"
import LoginFormPage from "./pages/LoginFormPage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import CodeVerificationPage from "./pages/CodeVerificationPage"
import YellowLoginPage from "./pages/YellowLoginPage"
import WhiteLoginPage from "./pages/WhiteLoginPage"

export default function App() {
  const [currentPage, setCurrentPage] = useState("startup")
  const fadeAnim = useRef(new Animated.Value(1)).current
  const slideAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToLogin()
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const navigateToLogin = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentPage("login")
      fadeAnim.setValue(0)
      slideAnim.setValue(50)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start()
    })
  }

  const navigateToLoginForm = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentPage("loginForm")
      fadeAnim.setValue(0)
      slideAnim.setValue(50)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start()
    })
  }

  const navigateToRegister = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentPage("register")
      fadeAnim.setValue(0)
      slideAnim.setValue(50)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start()
    })
  }

  const navigateToForgotPassword = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentPage("forgotPassword")
      fadeAnim.setValue(0)
      slideAnim.setValue(50)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start()
    })
  }

  const navigateToCodeVerification = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentPage("codeVerification")
      fadeAnim.setValue(0)
      slideAnim.setValue(50)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start()
    })
  }

  const navigateToYellowLogin = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentPage("yellowLogin")
      fadeAnim.setValue(0)
      slideAnim.setValue(50)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start()
    })
  }

  const navigateToWhiteLogin = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentPage("whiteLogin")
      fadeAnim.setValue(0)
      slideAnim.setValue(50)
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start()
    })
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "startup":
        return (
          <StartupPage
            onNavigateToLogin={navigateToLogin}
            onNavigateToLoginForm={navigateToLoginForm}
            onNavigateToRegister={navigateToRegister}
            onNavigateToYellowLogin={navigateToYellowLogin}
            onNavigateToWhiteLogin={navigateToWhiteLogin}
          />
        )
      case "login":
        return <LoginPage onNavigateToLoginForm={navigateToLoginForm} onNavigateToRegister={navigateToRegister} />
      case "loginForm":
        return <LoginFormPage onNavigateToForgotPassword={navigateToForgotPassword} />
      case "register":
        return <RegisterPage />
      case "forgotPassword":
        return <ForgotPasswordPage onNext={navigateToCodeVerification} />
      case "codeVerification":
        return <CodeVerificationPage />
      case "yellowLogin":
        return <YellowLoginPage />
      case "whiteLogin":
        return <WhiteLoginPage />
      default:
        return (
          <StartupPage
            onNavigateToLogin={navigateToLogin}
            onNavigateToLoginForm={navigateToLoginForm}
            onNavigateToRegister={navigateToRegister}
            onNavigateToYellowLogin={navigateToYellowLogin}
            onNavigateToWhiteLogin={navigateToWhiteLogin}
          />
        )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.pageContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        {renderCurrentPage()}
      </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  pageContainer: {
    flex: 1,
  },
})
