import React from 'react'
import { styled } from 'styled-components'
import { Col } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const ContainerFluid=styled(Container)`
        background-color: #015761;
    `;
    const ContainerItem=styled(Container)`
        background-color: #015761;
        padding: 30px;
    `;
    const HTwoItem=styled.span`
        padding: 3px;
        border: 2px solid #F7DC4F;
        background-color: #015761 ;
        color: #F7DC4F;
        font-size: 30px;
        
    `;
    const Heading=styled.div`
        margin-bottom: 20px;
    `;
    const SubHeading=styled.h5`
        color: #F7DC4F;
    `;
    const InfoItem=styled.div`
        margin-bottom: 20px;
    `;

    const HSix=styled.h6`
        /* color: #F7DC4F; */
        color: white;
    `;
    const LiItem=styled.li`
        color: white;
       
    `;
    const ImageDiv=styled.div`
        margin-bottom:20px;
        
    `;

    const Pdfitem=styled.div`
        padding: 10px;
        text-align: center;
    `;

    const PdfFile=styled.div`
       
        margin-top: 20px;
    `;

    const PdfLink=styled.a`
        color: white;
        text-decoration: none;
    `;


const Resume = () => {
    

  return (
    <>
    <ContainerFluid fluid>
        <Pdfitem>
        <HTwoItem>
            IMDB
        </HTwoItem>
        <PdfFile>

        <PdfLink
        href="/SangharshaResume.pdf" 
        download="SangharshaResume.pdf" 
      >
        Download Resume PDF
      </PdfLink>
        </PdfFile>

        </Pdfitem>
        <ContainerItem>
            <Row>
                <Col md={6} sm={12}>
                <ImageDiv>

                <Image src="./Photos/me.jpg" roundedCircle style={{width:'30%'}} />
                </ImageDiv>

                <Heading>

                    <HTwoItem>Cybersecurity Analyst
                    </HTwoItem>
                </Heading>
                <InfoItem>
                    <SubHeading>
                    Sangharsha Thapa
                    </SubHeading>
                    <HSix>Passionate about cybersecurity, I am dedicated to enhancing digital safety and addressing security challenges. Committed to continuous learning, I stay ahead of emerging threats through ongoing education and hands-on training. Eager to contribute my skills, I strive to create secure digital environments and collaborate with like-minded professionals.</HSix>
                </InfoItem>

                <Heading>

                    <HTwoItem>Contact</HTwoItem>
                </Heading>
                <InfoItem>
                    <SubHeading>
                        Phone NO:
                    </SubHeading>
                    <HSix>9861526363</HSix>
                    <SubHeading>
                        Email:
                    </SubHeading>
                    <HSix>sobitmagar76@gmail.com</HSix>
                    <SubHeading>
                        Location:
                    </SubHeading>
                    <HSix>Thankot, Kathmandu, Nepal</HSix>
                </InfoItem>
                

                <Heading>

                    <HTwoItem>Education</HTwoItem>
                </Heading>
                <InfoItem>
                    <SubHeading>
                    School Leaving Certificate
                    </SubHeading>
                    <HSix>Bright Angels School <br></br>
                    Nepal, kathmandu</HSix>
                    <SubHeading>
                    National Examination Board
                    </SubHeading>
                    <HSix>Bernhardt College <br></br>Nepal, kathmandu</HSix>
                    <SubHeading>
                    Bachelors of Science in Computer Science and Information Technology
                    </SubHeading>
                    <HSix>Nepalaya College <br></br>Nepal, kathmandu </HSix>
                </InfoItem>


                

                
                </Col>


                <Col md={6} sm={12}>
                <Heading>

<HTwoItem>Tranning / Certification</HTwoItem>
</Heading>
<InfoItem>
<SubHeading>
Certified Ethical Hacker (CEH)-- Broadway Infosys
</SubHeading>
<HSix>Learned how to identify and exploit vulnerabilities using in various systems
and networks.<br></br>
Gained hands-on experience in penetration testing and ethical hacking
techniques using tools such as Metasploit, Nmap, and Burp Suite</HSix>
</InfoItem>
<InfoItem>
<SubHeading>
Cisco Certified Network Associate (CCNA) Routing and Switching - Broadway Infosys
</SubHeading>
<HSix>Acquired in-depth knowledge of networking fundamentals, including IP
addressing, subnetting, and routing protocols.<br></br>
Developed skills in configuring and troubleshooting routers and switches</HSix>
</InfoItem>
                
<InfoItem>
<SubHeading>
Python Training - Broadway Infosys 
</SubHeading>
<HSix>learned Python fundamentals and scripting for automation. </HSix>
</InfoItem>
<Heading>

<HTwoItem>Experience</HTwoItem>
</Heading>
<InfoItem>
<SubHeading>
Vulnerability Analyst <br></br> Master Nepal, Kathmandu <br></br>
2024-Present 
</SubHeading>
<ul>
<LiItem><HSix>Identify and assess security vulnerabilities in systems, networks, and applications using tools like Nessus and openvas.  </HSix>
</LiItem>
<LiItem><HSix>Prioritize risks and collaborate with IT teams to implement remediation strategies.  </HSix>
</LiItem>
<LiItem><HSix>Provide security consulting to enhance overall protection</HSix>
</LiItem>
<LiItem><HSix>Stay updated on emerging threats and generate reports to track vulnerability management progress</HSix>
</LiItem>
</ul>
</InfoItem>

<InfoItem>
<SubHeading>
Frontend Developer <br></br> Ganesh Himal Technology, Kathmandu<br></br>
2022(Apr-Oct)
</SubHeading>
<ul>
<LiItem><HSix>Designed and built responsive UIs with HTML, CSS, Bootstrap, and JavaScript.  </HSix>
</LiItem>
<LiItem><HSix>Integrated APIs with backend systems and optimized web performance.  </HSix>
</LiItem>
<LiItem><HSix>Ensured cross-browser compatibility and managed code with Git.</HSix>
</LiItem>
<LiItem><HSix>Enhanced skills in responsive design, JavaScript frameworks, and teamwork. </HSix>
</LiItem>
</ul>
</InfoItem>

                <Heading>
                <HTwoItem>Skills</HTwoItem>
                </Heading>
                <InfoItem>
                    <ul>
                        <LiItem><HSix>Vulnerability Assessment and Penetration Testing</HSix>
                        </LiItem>
                        <LiItem><HSix>Network Security</HSix> </LiItem>
                        <LiItem><HSix>GIT / Version Control </HSix> </LiItem>
                        <LiItem><HSix>Exploitation Techniques and Security Assessments </HSix> </LiItem>
                        <LiItem><HSix>Python Scripting and Automation </HSix> 
                        </LiItem>
                        <LiItem><HSix>HTML, CSS, JavaScript, and Responsive Design
</HSix> 
                        </LiItem>
                    </ul>
                </InfoItem>

                
                </Col>
            </Row>
        </ContainerItem>
    </ContainerFluid>
    
    
    </>
  )
}

export default Resume
