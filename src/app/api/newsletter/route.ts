import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'jankiinfotech7@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password', // Use app password for Gmail
      },
    })

    // Email content
    const mailOptions = {
      from: 'jankiinfotech7@gmail.com',
      to: email,
      subject: 'Welcome to JankiInfotech Newsletter! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to JankiInfotech</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
            .highlight { color: #10b981; font-weight: bold; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; color: #666; font-size: 14px; }
            .social-links { margin: 20px 0; }
            .social-links a { display: inline-block; margin: 0 10px; color: #10b981; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">JankiInfotech</div>
              <p>Welcome to our tech community!</p>
            </div>
            
            <div class="content">
              <h2>Thank you for joining us! 🎉</h2>
              
              <p>Hi there!</p>
              
              <p>We're thrilled to have you as part of the <span class="highlight">JankiInfotech</span> community. You've just taken the first step towards staying updated with the latest in technology, web development, and digital innovation.</p>
              
              <h3>What to expect:</h3>
              <ul>
                <li>🚀 Latest tech trends and insights</li>
                <li>💻 Web development tips and tutorials</li>
                <li>📱 Mobile app development guides</li>
                <li>☁️ Cloud solutions and best practices</li>
                <li>🎓 Training program updates and opportunities</li>
                <li>🎯 Exclusive offers and early access to our services</li>
              </ul>
              
              <p>We're committed to delivering valuable content that helps you grow in your tech journey. Our team of experts regularly shares insights that can help you stay ahead in the rapidly evolving digital landscape.</p>
              
              <h3>Get Started:</h3>
              <p>While you're here, feel free to explore our services:</p>
              <ul>
                <li><strong>Web Development:</strong> Custom websites and web applications</li>
                <li><strong>Mobile Apps:</strong> Cross-platform mobile solutions</li>
                <li><strong>Cloud Solutions:</strong> Scalable cloud infrastructure</li>
                <li><strong>Training Programs:</strong> Hands-on internships and courses</li>
              </ul>
              
              <p>Have questions or need assistance? Simply reply to this email or contact us at <a href="mailto:jankiinfotech7@gmail.com" style="color: #10b981;">jankiinfotech7@gmail.com</a></p>
              
              <div class="social-links">
                <p>Connect with us:</p>
                <a href="https://www.linkedin.com/company/janki-infotech">LinkedIn</a> |
                <a href="https://www.instagram.com/jankiinfotech">Instagram</a> |
                <a href="https://www.facebook.com/jankiinfotech">Facebook</a>
              </div>
              
              <p>Welcome aboard! 🚀</p>
              
              <p>Best regards,<br>
              <strong>The JankiInfotech Team</strong><br>
              <em>Empowering your digital presence</em></p>
            </div>
            
            <div class="footer">
              <p>© 2025 JankiInfotech. All rights reserved.</p>
              <p>Bihar, India | Serving clients globally</p>
              <p style="font-size: 12px; color: #999; margin-top: 15px;">
                You received this email because you subscribed to our newsletter at jankiinfotech.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Newsletter subscription successful! Check your email for confirmation.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to send confirmation email. Please try again.' },
      { status: 500 }
    )
  }
}
