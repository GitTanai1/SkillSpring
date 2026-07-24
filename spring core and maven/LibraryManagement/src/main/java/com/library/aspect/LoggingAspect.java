package com.library.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.library.service.BookService.*(..))")
    public void logBeforeMethod() {
        System.out.println("[AOP] Starting BookService method execution.");
    }

    @After("execution(* com.library.service.BookService.*(..))")
    public void logAfterMethod() {
        System.out.println("[AOP] Finished BookService method execution.");
    }

    @Around("execution(* com.library.service.BookService.*(..))")
    public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
        long startTime = System.currentTimeMillis();
        Object result = joinPoint.proceed();
        long executionTime = System.currentTimeMillis() - startTime;

        System.out.println("[AOP] " + joinPoint.getSignature().getName()
                + " executed in " + executionTime + " ms.");
        return result;
    }
}
