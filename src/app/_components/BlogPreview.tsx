// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Calendar, Clock, ArrowRight } from "lucide-react";

// const BlogPosts = () => {
//   const blogPosts = [
//     {
//       title: "The Evolution of Gaming Content Creation",
//       preview:
//         "Reflecting on how the gaming content landscape has changed over the past few years and what it means for creators like us...",
//       date: "Dec 28, 2024",
//       readTime: "5 min read",
//       category: "Gaming",
//     },
//     {
//       title: "Building an Authentic Community on Twitch",
//       preview:
//         "The ups and downs of growing a streaming community while staying true to yourself. Lessons learned from 1000+ hours of streaming...",
//       date: "Dec 20, 2024",
//       readTime: "8 min read",
//       category: "Streaming",
//     },
//     {
//       title: "Music Reactions: Finding the Balance",
//       preview:
//         "How to create engaging music reaction content while respecting artists and providing genuine value to viewers...",
//       date: "Dec 15, 2024",
//       readTime: "6 min read",
//       category: "Music",
//     },
//   ];
//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
//       {blogPosts.map((post, index) => (
//         <Card
//           key={index}
//           className="group bg-gradient-card border-muted overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105"
//         >
//           <div className="p-6">
//             {/* Category Badge */}
//             <div className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
//               {post.category}
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
//               {post.title}
//             </h3>

//             {/* Preview */}
//             <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
//               {post.preview}
//             </p>

//             {/* Meta Info */}
//             <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
//               <div className="flex items-center space-x-3">
//                 <span className="flex items-center">
//                   <Calendar className="w-4 h-4 mr-1" />
//                   {post.date}
//                 </span>
//                 <span className="flex items-center">
//                   <Clock className="w-4 h-4 mr-1" />
//                   {post.readTime}
//                 </span>
//               </div>
//             </div>

//             {/* Read More */}
//             <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all duration-300">
//               <span>Read More</span>
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </div>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// };

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center p-12 text-xl">
      Coming Soon...
    </div>
  );
};

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Latest from the <span className="text-primary">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Thoughts on content creation, gaming, and the journey of building
            something meaningful
          </p>
        </div>
        <ComingSoon />
        {/* <BlogPosts /> */}
        <div className="text-center">
          {/* <Button
            variant="outline"
            size="lg"
            className="font-montserrat border-primary text-primary hover:bg-primary hover:text-white"
          >
            Read All Posts
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
