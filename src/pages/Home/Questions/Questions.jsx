

const Questions = () => {
    return (
        <div className=" min-h-screen mt-28">
            <h2 className="text-2xl text-center mx-10 md:text-4xl text-gray-500 font-extrabold border-b-2 pb-5 mb-10">
                Frequently Asked Questions!
            </h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/409/491/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg" className="max-w-sm rounded-lg " />
                    <div>
                        
                        <div className="collapse ">
                            <input type="checkbox" />  
                            <div className="collapse-title text-xl text-gray-500 font-medium">
                                Who are you?
                            </div>
                            <div className="collapse-content text-gray-500"> 
                                <p>Activity Toys Direct Limited is a family run business based in North Yorkshire with over 55 years of experience in the Toy industry.<br/> We are now established as one of the leading retailers of Children's Play Equipment.</p>
                            </div>
                        </div>
                        <div className="collapse ">
                            <input type="checkbox" />  
                            <div className="collapse-title text-xl text-gray-500 font-medium">
                                Why should I buy from you?
                            </div>
                            <div className="collapse-content text-gray-500"> 
                                <p>We strive to provide an honest, fair and easy online shopping environment. Our site has been designed to put you first making it easy to find what you want.<br/>We constantly monitor our competitor's prices to provide you with the cheapest delivered price available. We are quite happy for you to 'check-out' the competition as this, very often, highlights just how good our prices are.</p>
                            </div>
                        </div>
                        <div className="collapse ">
                            <input type="checkbox" />  
                            <div className="collapse-title text-xl text-gray-500 font-medium">
                                Is the item I want in stock?
                            </div>
                            <div className="collapse-content text-gray-500"> 
                                <p>The vast majority of items are in stock within the UK all the time. However with such a huge range we can never guarantee we have everything 365 days of the year in all sizes and from time to time things will become unavailable. Where possible we have provided a lead time on our product pages. If you order an item that is out of stock we will always offer an immediate refund.</p>
                            </div>
                        </div>
                        <div className="collapse ">
                            <input type="checkbox" />  
                            <div className="collapse-title text-gray-500 text-xl font-medium">
                                How can I pay?
                            </div>
                            <div className="collapse-content text-gray-500"> 
                                <p>We accept payment via credit or debit card, PayPal, or bank transfer.</p>
                            </div>
                        </div>
                        <div className="collapse ">
                            <input type="checkbox" /> 
                            <div className="collapse-title text-xl font-medium text-gray-500">
                                Is my payment secure?
                            </div>
                            <div className="collapse-content text-gray-500"> 
                                <p>Absolutely, all card payments are processed using Sage Pay (part of the SAGE group). Sage Pay are the largest independent Payment Service Provider in the UK and operate to the highest level of compliance under the Payment Card Industry Data Security Standard (PCI). They take responsibility for capturing and storing card details on their secure servers. For further information on Sage Pay services & security please go to www.sagepay.com.

</p>
                            </div>
                        </div>
                        <div className="collapse ">
                            <input type="checkbox" /> 
                            <div className="collapse-title text-xl font-medium text-gray-500">
                                My product is faulty what do I do?
                            </div>
                            <div className="collapse-content text-gray-500"> 
                                <p>In the first instance you will need to e-mail us at mail@activitytoysdirect.com within 48hrs of delivery and advise us of the problem. Then all you need to do is leave the rest to us. Please see our returns policy for more details.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;